import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout,
    register,
    updateMentorProfile,
    getById,
    // update,
    // delete: _delete,
    getMentorProfile
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`http://backend.conmentr.com:8080/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a jwt token in the response
            
            if (user && user.data && user.data._id) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user.data._id));
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('userAuth');
    window.location.href = '/';
}

function updateMentorProfile(values) {
    const requestPayload = {
        roleId: '1',
        firstname: 'Vikas',
        activeUserId: JSON.parse(localStorage.getItem('user')),
        designation: values.designation,
        company: values.company,
        skills: values.skills,
        about: values.aboutMentor,
        payment: values.cost,
        userId: "5b66ead5d4183308156bdfa9"
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestPayload)
    };
    
    return fetch(`//52.66.139.66:8080/ProfileDataUpload`, requestOptions).then(handleResponse).then((user) => {
        return user;
    });
}

function getMentorProfile() {
    const requestPayload = {
        activeUserId: JSON.parse(localStorage.getItem('user'))
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestPayload)
    };
    
    return fetch(`//52.66.139.66:8080/getProfileInfo`, requestOptions).then(handleResponse).then((user) => {
        return user;
    });
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`//localhost:8080/users/${id}`, requestOptions).then(handleResponse);
}

function register(values) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email: values.email, password: values.password, firstName: values.firstName})
    };

    return fetch(`//52.66.139.66:8080/UserRegister`, requestOptions).then(handleResponse).then((user) =>{
            if (user.success) {
                
            }
            return user;
        }
    );
}

// function update(user) {
//     const requestOptions = {
//         method: 'PUT',
//         headers: { ...authHeader(), 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };

//     return fetch(`//localhost:8080/users/${user.id}`, requestOptions).then(handleResponse);;
// }

// prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//     const requestOptions = {
//         method: 'DELETE',
//         headers: authHeader()
//     };

//     return fetch(`//localhost:8080/users/${id}`, requestOptions).then(handleResponse);
// }

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}