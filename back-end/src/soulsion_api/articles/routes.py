from flask import (
    Blueprint,
    request
)

from soulsion_api.utils.utils import get_random_file_name

articles = Blueprint('articles',__name__)

@articles.route('/api/articles/get',methods=['POST'])
def get_article():
    data = {
        "content":"Article content"
    }

    return data

@articles.route('/api/articles/post',methods=['POST'])
def post_article():
    pass