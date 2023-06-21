import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY" : "3f2a2590-abfa-42fb-bdbe-272bf5fe85c8"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        // @ts-ignore
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    unFollow (userId: number) {
        return instance.delete(`follow/${userId}` )
            .then(response => response.data)
    },

    follow (userId: number) {
        return instance.post(`follow/${userId}` )
            .then(response => response.data)
    }

}

export const ProfileAPI = {
    login (userId: string) {
        return  instance.get(`profile/${userId}`)
                        .then(response => response.data)
    },
    getStatus (userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status/`, {status})
    }
}

export const authAPI = {
    authorization () {
        return  instance.get(`auth/me`)
            .then(response => response.data)
    },
}

