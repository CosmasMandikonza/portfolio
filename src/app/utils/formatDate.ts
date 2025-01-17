export function formatDate(date: string | undefined, includeRelative = false) {
    if (!date) {
        console.log('Date is undefined:', date); // Debug log
        return 'Date not available';
    }

    const currentDate = new Date();
    
    try {
        // Ensure date is in correct format
        const formattedInputDate = date.split('T')[0]; // Extract just the date part if T exists
        const targetDate = new Date(formattedInputDate);
        
        // Validate date
        if (isNaN(targetDate.getTime())) {
            console.log('Invalid date:', date); // Debug log
            return 'Invalid date';
        }

        const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
        const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
        const daysAgo = currentDate.getDate() - targetDate.getDate();

        let formattedDate = '';

        if (yearsAgo > 0) {
            formattedDate = `${yearsAgo}y ago`;
        } else if (monthsAgo > 0) {
            formattedDate = `${monthsAgo}mo ago`;
        } else if (daysAgo > 0) {
            formattedDate = `${daysAgo}d ago`;
        } else {
            formattedDate = 'Today';
        }

        const fullDate = targetDate.toLocaleString('en-us', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });

        if (!includeRelative) {
            return fullDate;
        }

        return `${fullDate} (${formattedDate})`;
    } catch (error) {
        console.error('Error formatting date:', error, 'Input date:', date); // Debug log
        return 'Invalid date format';
    }
}