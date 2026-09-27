const GUNS = [
  {
    name: 'Glock 17',
    type: 'Pistol',
    caliber: '9mm',
    price: 599,
    image: '/guns/pistol.svg',
    description:
      'The duty pistol everything else is measured against. Polymer frame, 17-round magazine, striker-fired trigger. Safe, boring, and it always goes bang.',
  },
  {
    name: 'AK-47',
    type: 'Rifle',
    caliber: '7.62mm',
    price: 899,
    image: '/guns/rifle.svg',
    description:
      'Gas-operated, loose tolerances, and famously indifferent to mud. Seven decades of service and still the benchmark for a rifle that will not quit.',
  },
  {
    name: 'Remington 870',
    type: 'Shotgun',
    caliber: '12 Gauge',
    price: 449,
    image: '/guns/shotgun.svg',
    description:
      'Pump-action workhorse. Five shells in the tube, a receiver that has taken more abuse than most trucks, and a sound that ends arguments.',
  },
  {
    name: 'AR-15',
    type: 'Rifle',
    caliber: '5.56mm',
    price: 799,
    image: '/guns/rifle.svg',
    description:
      'Light-recoiling, endlessly modular, and accurate well past the range most shooters can hold. The platform you can rebuild with one tool.',
  },
  {
    name: 'Desert Eagle',
    type: 'Pistol',
    caliber: '.50 AE',
    price: 1599,
    image: '/guns/pistol.svg',
    description:
      'Gas-operated hand cannon. Three and a half pounds of chromed steel that fires a round most pistols would refuse. Subtle it is not.',
  },
  {
    name: 'Mossberg 500',
    type: 'Shotgun',
    caliber: '12 Gauge',
    price: 399,
    image: '/guns/shotgun.svg',
    description:
      'The other pump gun. Twin action bars, a simple safety on the tang, and a price that leaves money for ammunition.',
  },
  // --- 3 senjata baru (challenge) — foto asli dari internet, bukan AI-generated ---
  {
    name: 'Colt 1911',
    type: 'Pistol',
    caliber: '.45 ACP',
    price: 949,
    image:
      'https://images.unsplash.com/photo-1764322276619-da63091ee08c?fm=jpg&q=60&w=800&auto=format&fit=crop',
    description:
      'The original service pistol. Single-action, all-steel, and heavier than anything on this shelf. A century old and still the standard everyone else copies.',
  },
  {
    name: 'Winchester Model 70',
    type: 'Rifle',
    caliber: '.30-06 Springfield',
    price: 1099,
    image:
      'https://images.unsplash.com/photo-1713643562457-d958596c7022?fm=jpg&q=60&w=800&auto=format&fit=crop',
    description:
      'A bolt-action classic built for one shot placed well rather than many placed fast. Controlled-round-feed action, walnut stock, no batteries required.',
  },
  {
    name: 'Benelli M4',
    type: 'Shotgun',
    caliber: '12 Gauge',
    price: 1899,
    image:
      'https://images.unsplash.com/photo-1518487884151-ad2f25fb015c?fm=jpg&q=60&w=800&auto=format&fit=crop',
    description:
      'Gas-operated semi-auto built for the military and it shows. Runs dirty, runs wet, cycles the next shell before you have finished thinking about the last one.',
  },
]

export default GUNS
