import healthStatus from '../app';

test('should be healthy', () => {
  const result = healthStatus({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});

test('should be wounded', () => {
  const result = healthStatus({ name: 'Маг', health: 40 });
  expect(result).toBe('wounded');
});

test('should be critical', () => {
  const result = healthStatus({ name: 'Маг', health: 10 });
  expect(result).toBe('critical');
});

test('should be dead', () => {
  const result = healthStatus({ name: 'Маг', health: 0 });
  expect(result).toBe('dead');
});
