import url from "url";
import { Resource } from "../resource";
import Spritesheet from "../textures/Spritesheet";

export default function() {
  return function spritesheetParser(resource, next) {
    const imageResourceName = `${resource.name}_image`;

    if (
      !resource.data ||
      resource.type !== Resource.TYPE.JSON ||
      !resource.data.frames ||
      this.resources[imageResourceName]
    ) {
      next();
      return;
    }

    const loadOptions = {
      crossOrigin: resource.crossOrigin,
      metadata: resource.metadata.imageMetadata,
      parentResource: resource
    };

    const resourcePath = getResourcePath(resource, this.baseUrl);

    // load the image for this sheet
    this.add(imageResourceName, resourcePath, loadOptions, function onImageLoad(
      res
    ) {
      if (res.error) {
        next(res.error);
        return;
      }

      const spritesheet = new Spritesheet(
        res.texture.baseTexture,
        resource.data,
        resource.url
      );
      spritesheet.parse(() => {
        resource.spritesheet = spritesheet;
        resource.textures = spritesheet.textures;
        next();
      });
    });
  };
}

export function getResourcePath(resource, baseUrl) {
  // Prepend url path unless the resource image is a data url
  if (resource.isDataUrl) {
    return resource.data.meta.image;
  }

  return url.resolve(
    resource.url.replace(baseUrl, ""),
    resource.data.meta.image
  );
}
