import { defineEventHandler, sendStream } from 'h3';
import { createReadStream } from 'fs';
import { join } from 'path';

export default defineEventHandler(async (event) => {
  // Define the file path (adjust the file name and path as necessary)
  const filePath = join(process.cwd(), 'server/files/sample-file.txt');

  // Create a read stream for the file
  const fileStream = createReadStream(filePath);

  // Set headers for the response
  event.res.setHeader('Content-Type', 'application/octet-stream');
  event.res.setHeader('Content-Disposition', 'attachment; filename=sample-file.txt');

  // Send the file stream
  return sendStream(event, fileStream);
});
