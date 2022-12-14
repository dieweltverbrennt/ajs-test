export default function healthStatus(data) {
  let health;
  if (data.name !== undefined || data.health !== undefined) {
    switch (true) {
      case data.health > 50:
        health = 'healthy';
        break;
      case data.health <= 50 && data.health >= 15:
        health = 'wounded';
        break;
      case data.health < 15 && data.health > 0:
        health = 'critical';
        break;
      default:
        health = 'dead';
    }
  }
  return health;
}
