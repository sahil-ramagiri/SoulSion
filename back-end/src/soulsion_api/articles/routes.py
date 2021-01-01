from flask import (
    Blueprint,
    request
)

from soulsion_api.utils.utils import get_random_file_name
from soulsion_api.models.articles import Articles

articles = Blueprint('articles',__name__)

__article_data_directory = "/data/article/" #folder to articles data (file)

@articles.route('/api/articles/get',methods=['POST'])
def get_article():

    # get article id  from request data

    # validate data

    # get the file name corresponding to the article in the database : Articles -> say "stress-management.md"

    # read the contents of the file -> __article_data_directory + file_name -> /data/article/stress-management.md

    # return the content
    data = {
        "content":"Article content"
    }

    return data

@articles.route('/api/articles/post',methods=['POST'])
def post_article():
    pass