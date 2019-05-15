const { workerData, parentPort } = require('worker_threads')

// You can do any heavy stuff here, in a synchronous way
// without blocking the "main thread"
let message = `${workerData} from worker`;
parentPort.postMessage({ hello: message });