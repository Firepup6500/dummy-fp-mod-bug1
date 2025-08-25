function loopLogic() {
    cache.contains(p => p.unit() == null)
}

function unitLoop() {
    loopLogic();
    Time.runTask(0.1, unitLoop);
}

Time.runTask(0.1, unitLoop);
