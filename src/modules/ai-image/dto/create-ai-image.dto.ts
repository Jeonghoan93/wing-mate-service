export class CreateAiImageDto {
  userId: string;
  originalImage: string;
}

// Note: We're only including the originalImage field because the AI-generated image will be produced after processing the original image with your AI service. The resulting AI-generated image URL or path will be saved in the AiImage model afterwards.
