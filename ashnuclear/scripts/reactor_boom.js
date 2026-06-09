const reactor = Blocks.uraniumReactor;

// Сохраняем поведение разрушения, если оно еще не переопределено
if (!reactor.__originalKill) {
    reactor.__originalKill = reactor.kill;
}

reactor.kill = function(tile) {
    // Вызываем стандартное разрушение
    this.__originalKill(tile);
    
    const x = tile.worldx();
    const y = tile.worldy();
    const radius = 200 * 8;
    const damageAmount = 5000;
    
    Damage.damage(x, y, radius, damageAmount);
    Damage.damageAir(x, y, radius, damageAmount);
    Fx.nuclearcloud.at(x, y);
};