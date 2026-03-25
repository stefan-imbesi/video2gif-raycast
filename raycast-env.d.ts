/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Output Folder - Where converted GIFs are saved */
  "outputFolder": string,
  /** Default Quality - GIF quality (1-100) */
  "defaultQuality": string,
  /** Default Max Width - Maximum output width in pixels */
  "defaultMaxWidth": "original" | "320" | "480" | "640" | "800" | "1080",
  /** Default FPS - Frames per second (1-50) */
  "defaultFps": string,
  /** Default Loop Mode - How the GIF loops */
  "defaultLoopMode": "loop" | "none",
  /** Long Video Threshold - Videos longer than this (in seconds) will auto-show trim fields */
  "longVideoThreshold": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `convert-to-gif` command */
  export type ConvertToGif = ExtensionPreferences & {}
  /** Preferences accessible in the `convert-to-gif-custom` command */
  export type ConvertToGifCustom = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `convert-to-gif` command */
  export type ConvertToGif = {}
  /** Arguments passed to the `convert-to-gif-custom` command */
  export type ConvertToGifCustom = {}
}

