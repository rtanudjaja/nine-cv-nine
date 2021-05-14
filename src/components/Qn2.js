function wait(waitTime) {
  return new Promise(resolve => setTimeout(() => {
    console.log(`waited ${waitTime} ms`)
    resolve()
  }, waitTime));
}

async function series() {
  console.time('series');
  await wait(1000);
  await wait(1000);
  await wait(1000);
  console.timeEnd('series');
}

async function parallel() {
  console.time('parallel');
  await Promise.all([
    wait(1000),
    wait(1000),
    wait(1000)
  ])
  console.timeEnd('parallel');
}

const obj = {
  series: () => series(),
  parallel: () => parallel()
};

Object.freeze(obj);

async function test() {
  await obj.series();
  await obj.parallel();
}

test();