from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from soulsion_api.config import Config


db = SQLAlchemy()

def init_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    db.init_app(app)

    from soulsion_api.articles.routes import articles
    app.register_blueprint(articles)

    return app

