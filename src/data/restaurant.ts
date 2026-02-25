export const RESTAURANT = {
  name: 'Swipe Cantina',
  phone: '+1 (555) 555-5555',
  addressLines: ['123 Main Street', 'Kansas City, MO 64105'],
  orderLinks: [
    {
      id: 'order-site',
      label: 'Order Online',
      href: 'https://example.com/order',
    },
    { id: 'doordash', label: 'DoorDash', href: 'https://example.com/doordash' },
  ],
  mapLink: 'https://maps.google.com/?q=123+Main+Street+Kansas+City+MO+64105',
  hours: [
    { day: 'Mon', open: '11:00', close: '21:00' },
    { day: 'Tue', open: '11:00', close: '21:00' },
    { day: 'Wed', open: '11:00', close: '21:00' },
    { day: 'Thu', open: '11:00', close: '22:00' },
    { day: 'Fri', open: '11:00', close: '23:00' },
    { day: 'Sat', open: '12:00', close: '23:00' },
    { day: 'Sun', open: '12:00', close: '20:00' },
  ],
};
