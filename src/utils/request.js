import axios from 'axios';

export const signup = async (user) => {
  try {
    const response = await axios.post('https://notes-tier-api.herokuapp.com/api/v1/auth/signup', {
      name: user.name,
      email: user.email,
      password: user.password
    }, {
        validateStatus: function (status) {
          return status < 500; // Reject only if the status code is greater than or equal to 500
        }
      });

    return response.data;
  } catch (error) {
    return error;
  }
};

export const signin = async (user) => {
  try {
    const response = await axios.post('https://notes-tier-api.herokuapp.com/api/v1/auth/login', {
      email: user.email,
      password: user.password
    }, {
        validateStatus: function (status) {
          return status < 500;
        }
      });

    return response.data;
  } catch (error) {
    return error;
  }
};

export const getNotes = async (token) => {
  try {
    const response = await axios.get('https://notes-tier-api.herokuapp.com/api/v1/notes/viewAll', {
      headers: { Authorization: `Bearer ${token}` }
    }, {
        validateStatus: function (status) {
          return status < 500;
        }
      });

    return response.data;
  } catch (error) {
    return error;
  }
};

export const addNote = async (note, token) => {
  try {
    const data = {
      title: note.title,
      body: note.body,
    }
    const response = await axios.post('https://notes-tier-api.herokuapp.com/api/v1/notes/add', data, {
      headers: { Authorization: `Bearer ${token}` }
    }, {
        validateStatus: function (status) {
          return status < 500;
        }
      });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getOne = async (id, token) => {
  try {
    const response = await axios.get(`https://notes-tier-api.herokuapp.com/api/v1/notes/view/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    }, {
        validateStatus: function (status) {
          return status < 500;
        }
      });

    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateOne = async (id, note, token) => {
  try {
    const data = {
      title: note.title,
      body: note.body,
    };

    const response = await axios.patch(`https://notes-tier-api.herokuapp.com/api/v1/notes/update/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` }
    }, {
        validateStatus: function (status) {
          return status < 500;
        }
      });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteNote = async (id, token) => {
  try {
    const response = await axios.delete(`https://notes-tier-api.herokuapp.com/api/v1/notes/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    }, {
        validateStatus: function (status) {
          return status < 500;
        }
      });
    return response.data;
  } catch (error) {
    return error;
  }
};