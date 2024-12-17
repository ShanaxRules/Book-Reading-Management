export const sortRatings = (flag, books) => {
    if (flag) {
        return books.sort((a, b) => (a.rating - b.rating));
    }

};

export const sortPages = (flag, books) => {
    if (flag) {
        return books.sort((a, b) => (a.totalPages - b.totalPages));

    }
};

export const sortPublishedYear = (flag, books) => {
    if (flag) {
        return books.sort((a, b) => (a.yearOfPublishing - b.yearOfPublishing));


    }
};
