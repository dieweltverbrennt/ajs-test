import healthStatus from '../app';

test.each([
  [{ name: 'Mar', health: 100 }, 'healthy'],
  [{ name: 'Mar', health: 50 }, 'wounded'],
  [{ name: 'Mar', health: 25 }, 'wounded'],
  [{ name: 'Mar', health: 10 }, 'critical'],
  [{ name: 'Mar', health: 0 }, 'dead'],
])(
  ('healtStatus equal %s'),
  (data, expected) => {
    const result = healthStatus(data);
    expect(result).toBe(expected);
  },
);
