import api from './axios';

/**
 * Contact Us & Custom Feature Request API endpoints
 */
export const contactApi = {
  /**
   * Submit a general inquiry
   * POST /api/contact/inquiry
   */
  submitInquiry: (data) => api.post('/contact/inquiry', data),

  /**
   * Submit a bespoke custom feature request for a coaching institute
   * POST /api/contact/custom-feature
   */
  submitCustomFeature: (data) => api.post('/contact/custom-feature', data),

  /**
   * Retrieve all contact inquiries (admin)
   * GET /api/contact/inquiries
   */
  getAllInquiries: () => api.get('/contact/inquiries'),

  /**
   * Retrieve all custom feature requests (admin)
   * GET /api/contact/custom-features
   */
  getAllCustomFeatures: () => api.get('/contact/custom-features'),
};

export default contactApi;
