/* eslint-disable sonarjs/no-nested-template-literals */
import config from '_api/config';
import axios from 'axios';

axios.defaults.baseURL = config.API_BASE_URL;
export const profile = '/auth/profile/';
export const ssoAuthentication = '/auth/loginSSO/';
export const login = '/auth/login/';
export const regist = '/auth/register/';
export const urlRefreshToken = '/auth/token/refresh/';

export const exportRecap = '/mentoring/rekap/';
export const overview = (grupId) =>
  `/mentoring/grup/${grupId ? `${grupId}/` : 'mentor/'}`;
export const allPertemuan = (grupId) =>
  `/mentoring/grup/${grupId ? `${grupId}/pertemuan/` : 'pertemuan/'}`;
export const detailPertemuan = (pertemuanId) =>
  `/mentoring/grup/pertemuan/${pertemuanId}/`;
export const allAbsensi = (grupId) =>
  `/mentoring/grup/${grupId ? `${grupId}/absensi/` : 'absensi/'}`;
export const detailAbsensi = (absensiId) =>
  `/mentoring/grup/absensi/${absensiId}/`;
export const detailMentee = `/mentoring/mentee/`;
export const listKelompok = `/mentoring/grup/`;