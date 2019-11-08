import axios from 'axios';

export default axios.create({
  baseURL: '/graphql',
  headers: {
    'X-CSRF-Token': document.querySelector('[name="csrf-token"]').content
  },
  timeout: 10000  // Milliseconds
});
