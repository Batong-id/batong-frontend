import axios from 'axios';

import {
  addStore,
  allStore,
  deleteStore,
  forgotPassword,
  getOwnStore,
  getStoreBySlug,
  login,
  regist,
  resetPassword,
  updateStore,
  user
} from './endpoints';

export const userApi = {
  getUser: async () => {
    try {
      const response = await axios.get(user);
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  updateUser: async (dataPost) => {
    try {
      const response = await axios.put(user, dataPost);
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
};

export const authApi = {
  login: async (requestBody) => {
    try {
      const response = await axios.post(login, requestBody);
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  register: async (requestBody) => {
    try {
      const response = await axios.post(regist, requestBody);
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  forgotPassword: async (requestBody) => {
    try {
      const response = await axios.post(forgotPassword, requestBody);
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  resetPassword: async (requestBody) => {
    try {
      const response = await axios.put(resetPassword(), requestBody);
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
};

export const storeApi = {
  addStore: async (requestBody) => {
    try {
      const response = await axios.post(addStore, requestBody);
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  getAllStore: async () => {
    try {
      const response = await axios.get(allStore);
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  getOwnStore: async () => {
    try {
      const response = await axios.get(getOwnStore);
      return await response.data;
    } catch (error) {
      if (error.message === 'Request failed with status code 404') {
        return;
      } else {
        throw new Error(error);
      }
    }
  },
  getStoreBySlug: async (storeSlug) => {
    try {
      const response = await axios.get(getStoreBySlug(storeSlug));
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  updateStore: async (storeId, values) => {
    try {
      const response = await axios.put(updateStore(storeId), values);
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteStore: async (storeId) => {
    try {
      const response = await axios.put(deleteStore(storeId));
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
};

// export const mentorApi = {
//   getOverview: async () => {
//     try {
//       const response = await axios.get(overview());
//       return await response.data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   },

//   getAllPertemuan: async () => {
//     try {
//       const response = await axios.get(allPertemuan());
//       return await response.data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   },

//   getPertemuan: async (pertemuanId) => {
//     try {
//       const response = await axios.get(detailPertemuan(pertemuanId));
//       return await response.data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   },

//   editPertemuan: async (pertemuanId, dataPost) => {
//     try {
//       const response = await axios.put(detailPertemuan(pertemuanId), dataPost);
//       return await response.data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   },

//   addPertemuan: async (dataPost) => {
//     try {
//       const response = await axios.post(allPertemuan(), dataPost);
//       return await response.data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   },

//   getAllAbsensi: async () => {
//     try {
//       const response = await axios.get(allAbsensi());
//       return await response.data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   },

//   getAbsensiByGroupId: async (groupId) => {
//     try {
//       const response = await axios.get(allAbsensi(groupId));
//       return await response.data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   },

//   addAbsensi: async (dataPost) => {
//     try {
//       const response = await axios.post(allAbsensi(), dataPost);
//       return await response.data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   },
//   getAbsensi: async (absensiId) => {
//     try {
//       const response = await axios.get(detailAbsensi(absensiId));
//       return await response.data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   },

//   editAbsensi: async (absensiId, dataPost) => {
//     try {
//       const response = await axios.put(detailAbsensi(absensiId), dataPost);
//       return await response.data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   }
// };

// export const menteeApi = {
//   getMentee: async () => {
//     try {
//       const response = await axios.get(detailMentee);
//       return await response.data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   }
// };
