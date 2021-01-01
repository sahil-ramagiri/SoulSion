from flask import (
    abort,
    Blueprint,
    request
)

from soulsion_api.utils.utils import get_random_file_name
from soulsion_api.models.articles import Articles

articles = Blueprint('articles', __name__)

__article_data_directory = "/data/article/"


@articles.route('/api/articles/get', methods=['POST'])
def get_article():

    article_id = request.form.get('article_id', '')

    article = Articles.query.filter_by(article_id=article_id).first()
    if article is None:
        abort(404, description="article not found")

    file_name = article.file_name

    full_path = __article_data_directory + file_name

    try:
        with open(full_path, 'r') as file:
            article_content = file.read()
    except (OSError, IOError):
        abort(404, description="file not found")

    data = {
        "title": article.title,
        "content": article_content
    }

    return data


@articles.route('/api/articles/post', methods=['POST'])
def post_article():
    pass
