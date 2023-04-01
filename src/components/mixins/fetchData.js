export const fetchData = {
    data() {
        return {
            error: null,
            success: false,
        }
    },
    methods: {
        errorHandler({response}) {
            const err = response.data.error;

            this.error = {
                code: response.status,
                message: err.message,
                errors: err.errors,
            };
            
            return this.error;
        }
    } 
}