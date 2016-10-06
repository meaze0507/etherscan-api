'use strict';
const assert = require('chai').assert;
const init = require('../.').init;
describe('methods', function() {

  it('account.getminedblocks', function(done){
    var api = init();
    var txlist = api.account.getminedblocks('0x9dd134d14d1e65f84b706d6f205cd5b1cd03a46b');
    txlist.then(function(res){
      assert.ok(res);
      done();
    });
  });

  it('account.tokensupply', function(done){
    var api = init();
    var supply = api.account.tokensupply('0x57d90b64a1a57749b0f932f1a3395792e12e7055');
    supply.then(function(res){
      assert.ok(res);
      done();
    });
  });

  it('account.tokenbalance by name', function(done){
    var api = init();
    var supply = api.account.tokenbalance('0x0a869d79a7052c7f1b55a8ebabbea3420f0d1e13', 'TheDAO');
    supply.then(function(res){
      assert.ok(res);
      done();
    });
  });

  it('account.tokenbalance by address', function(done){
    var api = init();
    var supply = api.account.tokenbalance('0xe04f27eb70e025b78871a2ad7eabe85e61212761', false, '0x57d90b64a1a57749b0f932f1a3395792e12e7055');
    supply.then(function(res){
      assert.ok(res);
      done();
    });
  });


  it('account.txlist', function(done){
    var api = init();
    var txlist = api.account.txlist('0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae');
    txlist.then(function(res){
      assert.ok(res);
      done();
    });
  });

  it('account.txlistinternal', function(done){
    var api = init();
    var txlist = api.account.txlistinternal('0x40eb908387324f2b575b4879cd9d7188f69c8fc9d87c901b9e2daaea4b442170');
    txlist.then(function(res){
      assert.ok(res);
      done();
    });
  });

  it('account.balance', function(done){
    var api = init();
    var balance = api.account.balance('0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae');
    balance.then(function(res){
      assert.ok(res);
      done();
    });
  });


  it('account.balance multi', function(done){
    var api = init();
    var balance = api.account.balance(['0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae']);
    balance.then(function(res){
      assert.ok(res);
      done();
    });
  });

  it('stats.ethsupply', function(done){
    var api = init();
    var supply = api.stats.ethsupply();
    supply.then(function(res){
      assert.ok(res);
      done();
    });
  });

  it('stats.tokensupply', function(done){
    var api = init();
    var supply = api.stats.tokensupply('MKR');
    supply.then(function(res){
      assert.ok(res);
      done();
    });
  });

  it('stats.ethprice', function(done){
    var api = init();
    var price = api.stats.ethprice();
    price.then(function(res){
      assert.ok(res);
      done();
    });
  });

  it('block.getblockreward', function(done){
    var api = init();
    var blockreward = api.block.getblockreward();
    blockreward.then(function(res){
      assert.ok(res);
      done();
    });
  });

  it('transaction.getstatus', function(done){
    var api = init();
    var status = api.transaction.getstatus('0x15f8e5ea1079d9a0bb04a4c58ae5fe7654b5b2b4463375ff7ffb490aa0032f3a');
    status.then(function(res){
      assert.ok(res);
      done();
    });
  });

  it('contract.getabi', function(done){
    var api = init();
    var abi = api.contract.getabi('0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413');
    abi.then(function(res){
      assert.ok(res);
      done();
    });
  });
});