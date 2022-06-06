import { Message } from 'esbuild';

export class BundleError extends Error {
  constructor(filename: string, readonly messages: Message[]) {
    super(`Error bundling post "${filename}"`);
  }
}
