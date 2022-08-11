
export const handler = async (event) => {
    const messages = event.Records
    messages.forEach(message => {
        const { body } = message
        console.log(body)
    });

    return {
        statusCode: 200,
        message: "Test"
    }
} 