# Generated by Django 4.0.4 on 2022-11-21 20:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('matches', '0002_remove_match_ofc_score_one_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='match',
            name='results',
            field=models.CharField(default='TBD', max_length=70),
            preserve_default=False,
        ),
    ]