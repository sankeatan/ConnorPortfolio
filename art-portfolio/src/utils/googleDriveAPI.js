export const fetchImagesFromDrive = async (folderId, apiKey) => {
    const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType,webViewLink,webContentLink)`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.files.filter(file => file.mimeType.startsWith('image/'));
    } catch (error) {
      console.error("Error fetching images from Google Drive:", error);
      return [];
    }
  };
  