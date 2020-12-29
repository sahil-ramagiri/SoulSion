from flask import Flask
from soulsion_api.config import Config

def init_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    from soulsion_api.articles.routes import articles
    app.register_blueprint(articles)

    return app

