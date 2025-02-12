interface Address {
  city: string;
  location: string;
}

export interface User {
  email: string;
  name: string;
  avatar: string;
  profession: string;
  id: string;
  address: Address;
  description: string;
}
