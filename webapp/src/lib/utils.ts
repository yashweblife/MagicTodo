export function validateEmail(email: string) {

}
export function validatePassword(password: string) { }

export function generateID() {
	return Math.random().toString(36).substring(2, 9)
}