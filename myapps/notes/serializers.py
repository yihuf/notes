from rest_framework import serializers
from models import Note

class NoteSerializers(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ('uuid', 'parent_uuid', 'name', 'status', 'content', 'modifyDate')

