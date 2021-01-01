

from soulsion_api import db

class Articles(db.Model):
    article_id = db.Column(db.String(20), primary_key=True)
    file_name = db.Column(db.String(80), unique=True, nullable=False)
    title = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return '<Articles %r>' % self.article_id