var temp;
var my_lzma = new LZMA("lzma.js");
// Add an event listener to the document for a keydown event
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is the '<' key (key code 188) or use event.key === '<' for modern browsers
  if (event.keyCode === 188 || event.key === '<') {
    // Call the c2_callFunction
    c2_callFunction("Menu > DownloadReplay", []);

    // Save 'url_' to 'temp'
    temp = url_;

    // Log the value of 'temp'
    console.log('Variable temp:', temp);

    //decompress with lzma
    const compressedArray = new Uint8Array(temp);
    // Decompress the data using lzma
    lzma.decompress(compressedArray, (result, error) => {
      if (error) {
        console.error('Error decompressing data:', error);
      } else {
        // 'result' now contains the decompressed data
        const decryptedData = result.toString('utf-8');
        console.log('Decrypted Data:', decryptedData);
      }
    

  }
});
