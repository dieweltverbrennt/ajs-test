export default function healthStatus(data) {
  let health;
  if (data.name === undefined || data.health === undefined || typeof data.health === 'string') {
    return 0;
  }

  if (data.health > 50) {
    health = 'healthy';
  } else if (data.health <= 50 && data.health >= 15) {
    health = 'wounded';
  } else if (data.health < 15 && data.health > 0) {
    health = 'critical';
  } else {
    health = 'dead';
  }

  return health;
}
