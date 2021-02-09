const args = process.argv.slice(2);

for (let arg of args) {
  if (!isNaN(arg) && arg >= 0) {
    let interval = arg * 1000;
    setTimeout(()=>{
      process.stdout.write('\x07');
    }, interval);
  }
  
}


