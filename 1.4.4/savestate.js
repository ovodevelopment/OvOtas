let temp;
let old = globalThis.sdk_runtime;
c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
let runtime = globalThis.sdk_runtime;
globalThis.sdk_runtime = old;


let getPlayer = () => {
        return runtime.types_by_index
            .filter(
                (x) =>
                !!x.animations &&
                x.animations[0].frames[0].texture_file.includes("collider")
            )[0]
            .instances.filter(
                (x) => x.instance_vars[17] === "" && x.behavior_insts[0].enabled
            )[0];
    }




// Add an event listener to the document for a keydown event
document.addEventListener('keydown', (event) => {
  // Check if the pressed key is the '<' key (key code 188) or use event.key === '<' for modern browsers
  if (event.keyCode === 188 || event.key === '<') {
    // Call the c2_callFunction
    c2_callFunction('Menu > DownloadReplay', []);

    // Save 'url_' to 'temp'
    if (temp === null) {
      temp = url_;
    }
    else {

        console.log("DO LATER");






    }
    // Log the value of 'temp'
    console.log('Variable temp:', temp);

    // Decompress with lzma
    const compressedArray = new Uint8Array(temp);

    // Decompress the data using lzma
    LZMA_WORKER.decompress(compressedArray, (result, error) => {
      if (error) {
        console.error('Error decompressing data:', error);
      } else {
        // 'result' now contains the decompressed data
        const decryptedData = result.toString('utf-8');
        console.log('Decrypted Data:', decryptedData);
      }
    });

    else if(event.keyCode === 82 || event.key === 'r') {
      temp = null;
      //reset temp
    
    }
});
