const getFriendlyFirebaseError = (error: any): string => {
    const code = error?.code || "";

    const messages: Record<string, string> = {
        "auth/invalid-email": "Please enter a valid email address.",
        "auth/user-disabled": "This account has been disabled. Contact support for help.",
        "auth/user-not-found": "No account found with this email.",
        "auth/wrong-password": "Incorrect password. Please try again.",
        "auth/invalid-credential": "Invalid email or password. Please check and try again.",
        "auth/too-many-requests": "Too many failed attempts. Please try again later.",
        "auth/network-request-failed": "Network error. Check your internet connection.",
    };

    return messages[code] || "An unexpected error occurred. Please try again.";
};

export default getFriendlyFirebaseError;
