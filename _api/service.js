import axios from 'axios';

import {
  allAbsensi,
  allPertemuan,
  detailAbsensi,
  detailMentee,
  detailPertemuan,
  exportRecap,
  listKelompok,
  login,
  overview,
  regist
} from './endpoints';

export const mentorApi = {
  getOverview: async () => {
    try {
      const response = await axios.get(overview());
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  getAllPertemuan: async () => {
    try {
      const response = await axios.get(allPertemuan());
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  getPertemuan: async (pertemuanId) => {
    try {
      const response = await axios.get(detailPertemuan(pertemuanId));
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  editPertemuan: async (pertemuanId, dataPost) => {
    try {
      const response = await axios.put(detailPertemuan(pertemuanId), dataPost);
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  addPertemuan: async (dataPost) => {
    try {
      const response = await axios.post(allPertemuan(), dataPost);
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  getAllAbsensi: async () => {
    try {
      const response = await axios.get(allAbsensi());
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  getAbsensiByGroupId: async (groupId) => {
    try {
      const response = await axios.get(allAbsensi(groupId));
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  addAbsensi: async (dataPost) => {
    try {
      const response = await axios.post(allAbsensi(), dataPost);
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  getAbsensi: async (absensiId) => {
    try {
      const response = await axios.get(detailAbsensi(absensiId));
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  editAbsensi: async (absensiId, dataPost) => {
    try {
      const response = await axios.put(detailAbsensi(absensiId), dataPost);
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
};

export const menteeApi = {
  getMentee: async () => {
    try {
      const response = await axios.get(detailMentee);
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
};

export const mdcApi = {
  getRekap: async () => {
    try {
      const response = await axios.get(exportRecap);
      downloadNow(response.data);
    } catch (error) {
      throw new Error(error);
    }
  },

  getAllKelompok: async () => {
    try {
      const response = await axios.get(listKelompok);
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  getOverview: async (grupId) => {
    try {
      const response = await axios.get(overview(grupId));
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  getAllPertemuan: async (grupId) => {
    try {
      const response = await axios.get(allPertemuan(grupId));
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  },

  getAllAbsensi: async (grupId) => {
    try {
      const response = await axios.get(allAbsensi(grupId));
      return await response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
};

export const client = {
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
  }
};

const downloadNow = (text) => {
  const element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/csv;charset=utf-8,' + encodeURIComponent(text)
  );
  element.setAttribute('download', 'data.csv');

  element.style.display = 'none';

  element.click();
};
