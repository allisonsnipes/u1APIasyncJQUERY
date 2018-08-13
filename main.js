'use strict';

const YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/videos?id=";

function getDataFromApi(searchTerm, callback) {
    const query = {
        q: `${searchTerm} in: name`,

    }
    $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}

function renderResult(result) {
    return `
        <div>
            <h2>
            <a class="js-results-name" href="${result.html_url}" target="_blank">${result.name}</a> by
            <a class="js-user-name" href="${result.owner.html_url}" target="_blank">${result.owner.login}</a>
            </h2>
            <p>Number if watchers: <span class="js-watchers-cout">${result.watchers_count}</span></p>
            <p>
        </div>
        `;
}

function displayYoutuveSearchData(data) {
    const result = data.items.map((item, index) => renderResult(item));
    $('.js-search-results').html(results);
}

function watchSubmit() {
    $('.js-search-form').submit(event => {
        event.preventDefault();
        const queryTarget = $(event.currentTarget).find('.js-query');
        const query = queryTarget.val();
        queryTarget.val("");
        getDataFromApi(query, displayYoutuveSearchData);
    });
}

$youtubeApiKey = AIzaSyByqAryqVPK-GWXsJStEc_zgWmqHZra7O0;

$(watchSubmit);