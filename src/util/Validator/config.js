export default () => {
    return {
        create: {
            rules: {
                "title": 'required|string',
                "description": 'required|string',
                "author": 'required|string',
                "genre": 'required|string',
                "ISBN": 'required|string',
                "price": 'required',
                "publication_date": 'required|date'
            },
            messages: {
                required: 'The field is required'
            }
        },
        update: {
            rules: {
                "title": 'string',
                "description": 'string',
                "author": 'string',
                "genre": 'string',
                "ISBN": 'string',
                "publication_date": 'date'
            },
            messages: {

            }
        }
    }
}