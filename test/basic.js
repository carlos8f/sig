describe('basic test', function () {
  it('generates sig', function () {
    var obj = {
      id: 'oi3nfpXp02',
      num: 2,
      sub: {
        obj: true,
        lol: false
      },
      arr: [23, 0]
    };
    assert.equal(sig(obj), 'bHVm8f');
  });
  it('generates same sig', function () {
    var obj = {
      num: 2,
      sub: {
        lol: false,
        obj: true
      },
      id: 'oi3nfpXp02',
      arr: [23, 0]
    };
    assert.equal(sig(obj), 'bHVm8f');
  });
  it('generates for string', function () {
    assert.equal(sig('0293029u3029302983502983502305820v0809z09g802930283jj;ka;dkfjalkejfoaef092305982035023'), 'cr5eVd');
  });
  it('generates for null', function () {
    assert.equal(sig({z: null}), 'bDPB_2');
  });
});
