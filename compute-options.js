module.exports = function(options) {

  var optionArr = ['-quiet'];

  if(options.preset) {
    optionArr.push('-preset');
    optionArr.push(options.preset);
  }
  if(options.quality) {
    optionArr.push('-q');
    optionArr.push(parseInt(options.quality, 10));
  }
  if(options.alphaQuality) {
    optionArr.push('-alpha_q');
    optionArr.push(parseInt(options.alphaQuality, 10));
  }
  if(options.method) {
    optionArr.push('-m');
    optionArr.push(parseInt(options.method, 10));
  }
  if(options.segments) {
    optionArr.push('-segments');
    optionArr.push(parseInt(options.segments, 10));
  }
  if(options.bytes) {
    optionArr.push('-size');
    optionArr.push(parseInt(options.bytes, 10));
  }
  if(options.psnr) {
    optionArr.push('-psnr');
    optionArr.push(parseFloat(options.psnr, 10));
  }
  if(options.size && options.size.width && options.size.height) {
    optionArr.push('-s');
    optionArr.push(parseInt(options.size.width, 10));
    optionArr.push(parseInt(options.size.height, 10));
  }
  if(options.spatialNoiseShaping) {
    optionArr.push('-sns');
    optionArr.push(parseInt(options.spatialNoiseShaping, 10));
  }
  if(options.filter) {
    optionArr.push('-f');
    optionArr.push(parseInt(options.filter, 10));
  }
  if(options.strong) {
    optionArr.push('-strong');
  }
  if(options.noStrong) {
    optionArr.push('-nostrong');
  }
  if(options.partitionLimit) {
    optionArr.push('-partition_limit');
    optionArr.push(parseInt(options.partitionLimit, 10));
  }
  if(options.pass) {
    optionArr.push('-pass');
    optionArr.push(parseInt(options.pass, 10));
  }
  if(options.crop && options.crop.x && options.crop.y && options.crop.width && options.crop.height) {
    optionArr.push('-crop');
    optionArr.push(parseInt(options.crop.x, 10));
    optionArr.push(parseInt(options.crop.x, 10));
    optionArr.push(parseInt(options.crop.width, 10));
    optionArr.push(parseInt(options.crop.height, 10));
  }
  if(options.resize && options.resize.width && options.resize.height) {
    optionArr.push('-s');
    optionArr.push(parseInt(options.resize.width, 10));
    optionArr.push(parseInt(options.resize.height, 10));
  }
  if(options.multiThreading) {
    optionArr.push('-mt');
  }
  if(options.lowMemory) {
    optionArr.push('-low_memory');
  }
  if(options.alphaMethod) {
    optionArr.push('-alpha_method');
    optionArr.push(parseInt(options.alphaMethod, 10));
  }
  if(options.alphaFilter) {
    optionArr.push('-alpha_filter');
    optionArr.push(options.alphaFilter);
  }
  if(options.alphaCleanup) {
    optionArr.push('-alpha_cleanup');
  }
  if(options.noAlpha) {
    optionArr.push('-noalpha');
  }
  if(options.lossless) {
    optionArr.push('-lossless');
  }
  if(options.hint) {
    optionArr.push('-hint');
    optionArr.push(options.hint);
  }
  if(options.metadata) {
    optionArr.push('-metadata');
    optionArr.push(options.metadata);
  }

  return optionArr;
};