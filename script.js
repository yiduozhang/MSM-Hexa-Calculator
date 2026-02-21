function validateTargets(TARGET_MAIN, TARGET_SUB, CURRENT_MAIN) {
    if (TARGET_MAIN < 7) {
        return 'TARGET_MAIN must be at least 7.';
    }
    if (TARGET_SUB < 9) {
        return 'TARGET_SUB must be at least 9.';
    }
    if (CURRENT_MAIN < 3) {
        return 'CURRENT_MAIN must be at least 3.';
    }
    return 'Validation passed.';
}

// Example usage
console.log(validateTargets(8, 9, 3)); // Validation passed.
console.log(validateTargets(6, 9, 3)); // TARGET_MAIN must be at least 7.
console.log(validateTargets(8, 8, 3)); // TARGET_SUB must be at least 9.
console.log(validateTargets(8, 9, 2)); // CURRENT_MAIN must be at least 3.