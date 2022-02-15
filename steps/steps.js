const {Given, defineParameterType} = require("@cucumber/cucumber");
const assert = require("assert").strict;

defineParameterType({
    name: "command",
    regexp: /`(.+)`/,
    transformer: (cmd) => cmd,
})

Given('I have {int} cucumbers in my belly', function (cucumberCount) {
    assert.equal(200, cucumberCount)
});