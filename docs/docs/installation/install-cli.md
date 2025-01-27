---
sidebar_position: 3
---

# Install CLI

AutoShorts comes with a CLI interface that allows you to generate videos with a simple command line interface. The CLI is built with Node.js and relies on the JS interface.

:::note

Note: Since LLMs can hallucinate and are not deterministic, the videos may not generate the expected output. You can manually edit the JSON output to fix the issue.

:::

## Install the package globally

```bash
npm install -g auto-shorts
```

## Download the necessary resources (to './res' folder by default)
```bash
npx auto-shorts --download
```

## Generate a video with AI (will find the necessary resources in the './res' folder)
You have options to use different AI tools to generate the script, voice, and image.

- Use OpenAI gpt-4o-mini to generate the script, ElevenLabs to generate the voice, and Pexels to generate the image

```bash
npx auto-shorts -p "make a news short about TypeScript" --aiType OpenAIGen --ttsType ElevenLabs --imageType Pexels --elevenLabsAPIKey YOUR_ELEVENLABS_API_KEY --pexelsAPIKey YOUR_PEXELS_API_KEY --openaiAPIKey YOUR_OPENAI_API_KEY
```

- Use local Ollama llama3.2 to generate the script, Built-in TTS to generate the voice, and Google Scraper to generate the image (default, no need to provide API keys)
```bash
npx auto-shorts -p "make a news short about TypeScript"
```

You can also run the command interactively and provide the necessary information when prompted:
```bash
npx auto-shorts
```

## For help
```bash
npx auto-shorts --help
```

Example output (v0.2.0-dev):

```bash
AutoShorts AI video generator (CLI Edition)

  Generate AI videos of different types based on a prompt.

Options

  --download                  Download models needed for AI generation.
  --server                    Start API server. IP and port comes from env
                              variable.
  --deleteTemp                Delete temporary video files.
  -p, --prompt text           The prompt to use for the AI to generate video.
  --aiType type               The AI provider to use. Can be OpenAIGen,
                              GoogleAIGen, AnthropicAIGen, OllamaAIGen.
  --ttsType type              The TTS provider to use. Can be ElevenLabs,       
                              BuiltinTTS, NeetsTTS.
  --imageType type            The image provider to use. Can be Pexels,
                              GoogleScraper, FluxAI.
  --orientation orientation   The orientation of the video. (vertical,
                              horizontal)
  --tempPath path             The temporary path to save video files. (default: 
                              ./video_temp)
  --resPath path              The path to the resources directory. (default:    
                              ./res)
  --jsonFile path             The JSON file to use for video generation.
                              Overrides AI.
  -h, --help                  Print this usage guide.

TTS Options

  --ttsMaleVoice voice     TTS male voice to use. If applicable.
  --ttsFemaleVoice voice   TTS female voice to use If applicable.
  --ttsVoiceModel model    TTS voice model to use. If applicable.

Image Options

  --imgAIModel model     AI model to use for image generation. If applicable.
  --imgAIPrompt prompt   AI suffix prompt to use for image generation. If       
                         applicable.

Subtitle Options

  --subtitleLen number      Subtitle token length override.
  --subFontName font        Subtitle font name override.
  --subFontSize number      Subtitle font size override.
  --subFontColor color      Subtitle font color override.
  --subStrokeColor color    Subtitle stroke color override.
  --subStrokeWidth number   Subtitle stroke width override

Advanced Options

  --changePhotos                Change photos in video. Used to prevent
                                overriding wanted photos (default: true)
  --disableTTS                  Disable TTS in video. Used to prevent
                                overriding wanted TTS (default: false)
  --bgMusic path                Use custom background music.
  --bgVideo path                Use custom background video. If applicable.
  --noBgVideo                   Disable background video. (default: false)
  --noBgMusic                   Disable background music. (default: false)
  --useMock                     Use mock JSON data. (default: false)
  --disableSubtitles            Disable subtitles in video. (default: false)
  --systemPromptOverride text   Override system prompt. May not work with all   
                                AI types.
  --openAIEndpoint endpoint     OpenAI endpoint URL to use. If applicable.
  --model model                 AI model to use. If applicable.

API Keys

  --elevenlabsAPIKey key   Eleven Labs API key. If applicable.
  --pexelsAPIKey key       Pexels API key. If applicable.
  --neetsAPIKey key        Neets API key. If applicable.
  --openaiAPIKey key       OpenAI API key. If applicable.
  --googleaiAPIKey key     Google AI API key. If applicable.
  --anthropicAPIKey key    Anthropic AI API key. If applicable.

  Created by Shafil Alam.
```
