from flask import (
    abort,
    Blueprint,
    jsonify,
    request
)
from werkzeug.exceptions import HTTPException

from soulsion_api import db
from soulsion_api.utils.utils import get_random_file_name
from soulsion_api.models.articles import Articles

articles = Blueprint('articles', __name__)

__article_data_directory = "data/article/"


@articles.errorhandler(HTTPException)
def handle_exception(e):
    """Return JSON instead of HTML for HTTP errors."""
    return jsonify(error=e.description), e.code

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

    article_id = request.form.get('article_id', '')
    title = request.form.get('title', '')
    content = request.form.get('content', '')

    if (not article_id) or (not title) or (not content):
        abort(400, description="invalid/missing data")

    already_exists = True
    while already_exists:
        file_name = get_random_file_name()
        res = Articles.query.filter_by(file_name=file_name).first()
        if res is None:
            already_exists = False

    full_path = __article_data_directory + file_name
    try:
        with open(full_path, 'w') as file:
            file.write(content)
    except (OSError, IOError) as e:
        print(e)
        abort(500, description="couldn't write to file")

    article = Articles(article_id=article_id, file_name=file_name, title=title)
    db.session.add(article)

    try:
        db.session.commit()
    except:
        abort(500, description="database error")

    return {"msg": "Sucessfully added article"}, 200
