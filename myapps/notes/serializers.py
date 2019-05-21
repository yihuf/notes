from rest_framework import serializers
from models import Titles, Contents

class TitlesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Titles
        fields = ('uuid', 'parent_uuid', 'name', 'status')


class ContentsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Contents
        fields = ('uuid', 'content', 'modifyDate')
