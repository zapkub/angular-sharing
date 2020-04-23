import {bindCallback, interval} from 'rxjs';
import {concatMap, map, take, tap} from 'rxjs/operators';

describe('Different between promise and observable', () => {

  function somethingAsynchronous(callback: (err: Error | null, result: string) => void) {
    setTimeout(() => {
      callback(null, 'Hello, world');
    }, 50);
  }

  function transformHelloToHi(data: string, callback: (err: Error | null, result: string) => void) {
    setTimeout(() => {
      callback(null, data + ' of Javascript');
    }, 50);
  }

  it('callback pattern asynchronously test', (done) => {
    somethingAsynchronous((err, data) => {
      console.log('data is resolved');
      expect(data).toEqual('Hello, world');
      console.log('Continue to this');
      transformHelloToHi(data, (err, result) => {
        transformHelloToHi(result, (err, result) => {
          transformHelloToHi(result, (err, result) => {
            transformHelloToHi(result, (err, result) => {
              transformHelloToHi(result, (err, result) => {
                expect(result).toEqual('Hello, world of Javascript of Javascript of Javascript of Javascript of Javascript');
                console.log(result);
                done();
              });
            });
          });
        });
      });
    });
  });

  const somethingAsynchronousOperator = bindCallback(somethingAsynchronous);
  const transformHelloToHiOperator = bindCallback(transformHelloToHi);
  it('reactive pattern asynchronously test', (done) => {
    somethingAsynchronousOperator()
      .pipe(
        tap(() => console.log('data is resolved')),
        concatMap(([err, data]) => transformHelloToHiOperator(data)),
        concatMap(([err, data]) => transformHelloToHiOperator(data)),
        concatMap(([err, data]) => transformHelloToHiOperator(data)),
        concatMap(([err, data]) => transformHelloToHiOperator(data)),
        concatMap(([err, data]) => transformHelloToHiOperator(data)),
      )
      .subscribe(([err, data]) => {
        expect(data).toEqual('Hello, world of Javascript of Javascript of Javascript of Javascript of Javascript');
        console.log(data);
        done();
      });
  });

  const somethingAsynchronousPromise = () => new Promise<string>((resolve, reject) => {
    somethingAsynchronous((err, data) => {
      if (err != null) {
        return reject(err);
      }
      resolve(data);
    });
  });
  const helloToHiPromise = (data: string) => new Promise<string>((resolve, reject) => {
    transformHelloToHi(data, (err, result) => {
      if (err != null) {
        return reject(err);
      }
      resolve(result);
    });
  });

  it('Promise pattern asynchronously test', () => {
    somethingAsynchronousPromise()
      .then((data) => {
        console.log('data is resolved');
        helloToHiPromise(data).then(() => {
          helloToHiPromise(data).then(() => {
            helloToHiPromise(data).then(() => {
              helloToHiPromise(data).then(() => {
                helloToHiPromise(data).then(() => {
                  expect(data).toEqual('Hello, world of Javascript of Javascript of Javascript of Javascript of Javascript');
                  console.log(data);
                });
              });
            });
          });
        });
      });
  });

  it('async/await pattern asynchronously test', async () => {
    let [err, data] = await somethingAsynchronousOperator().toPromise();
    console.log('data is resolved');
    [err, data] = await transformHelloToHiOperator(data).toPromise();
    [err, data] = await transformHelloToHiOperator(data).toPromise();
    [err, data] = await transformHelloToHiOperator(data).toPromise();
    [err, data] = await transformHelloToHiOperator(data).toPromise();
    [err, data] = await transformHelloToHiOperator(data).toPromise();
    expect(data).toEqual('Hello, world of Javascript of Javascript of Javascript of Javascript of Javascript');
    console.log(data);
  });

  const multipleResultSource = interval(100)
    .pipe(
      take(5),
      map((period, index) => {
        return 'count ' + index;
      })
    );
  it('cost of turn observable into promise', (done) => {
    // losing multiple result from observable pipeline
    multipleResultSource
      .pipe(
        concatMap(async () => {
          const result = await somethingAsynchronousPromise();
          return result;
        }))
      .subscribe((result) => {
        console.log(result);
        done();
      });

  });

});
